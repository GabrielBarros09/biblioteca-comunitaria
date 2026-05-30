from sqlalchemy import String, Boolean
from sqlalchemy.orm import Mapped, mapped_column
from database import Base

class Livro(Base):
    __tablename__ = "livros"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    titulo: Mapped[str] = mapped_column(String, index=True)
    autor: Mapped[str] = mapped_column(String)
    imagem: Mapped[str] = mapped_column(String)
    disponivel: Mapped[bool] = mapped_column(Boolean, default=True)