from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import Base, engine, SessionLocal
from models import Livro
from schemas import LivroCreate

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


@app.get("/")
def home():
    return {"mensagem": "API funcionando"}


@app.get("/livros")
def listar_livros(
    db: Session = Depends(get_db)
):
    return db.query(Livro).all()


@app.get("/livros/{id}")
def buscar_livro(
    id: int,
    db: Session = Depends(get_db)
):
    livro = db.query(Livro).filter(
        Livro.id == id
    ).first()

    if livro is None:
        raise HTTPException(
            status_code=404,
            detail="Livro não encontrado"
        )

    return livro

@app.post("/livros")
def criar_livro(
    livro: LivroCreate,
    db: Session = Depends(get_db)
):
    novo_livro = Livro(
        titulo=livro.titulo,
        autor=livro.autor,
        imagem=livro.imagem,
        disponivel=livro.disponivel
    )

    db.add(novo_livro)
    db.commit()
    db.refresh(novo_livro)

    return novo_livro


@app.put("/livros/{id}")
def atualizar_livro(
    id: int,
    livro: LivroCreate,
    db: Session = Depends(get_db)
):
    livro_db: Livro | None = db.query(Livro).filter(
        Livro.id == id
    ).first()

    if livro_db is None:
        raise HTTPException(
            status_code=404,
            detail="Livro não encontrado"
        )

    livro_db.titulo = livro.titulo
    livro_db.autor = livro.autor
    livro_db.imagem = livro.imagem
    livro_db.disponivel = livro.disponivel

    db.commit()
    db.refresh(livro_db)

    return livro_db


@app.delete("/livros/{id}")
def deletar_livro(
    id: int,
    db: Session = Depends(get_db)
):
    livro = db.query(Livro).filter(
        Livro.id == id
    ).first()

    if livro is None:
        raise HTTPException(
            status_code=404,
            detail="Livro não encontrado"
        )

    db.delete(livro)
    db.commit()

    return {
        "mensagem": "Livro removido com sucesso"
    }