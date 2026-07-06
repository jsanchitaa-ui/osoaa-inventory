from sqlalchemy import Boolean, Integer, Numeric, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class Product(Base):
    __tablename__ = "products"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
    )

    sku: Mapped[str] = mapped_column(
        String(50),
        unique=True,
        nullable=False,
    )

    product_name: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
    )

    brand: Mapped[str] = mapped_column(
        String(100),
        default="OSOAA",
    )

    category: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    flavour: Mapped[str] = mapped_column(
        String(100),
        default="",
    )

    size: Mapped[str] = mapped_column(
        String(50),
        default="",
    )

    mrp: Mapped[float] = mapped_column(
        Numeric(10, 2),
        default=0,
    )

    gst: Mapped[int] = mapped_column(
        Integer,
        default=18,
    )

    minimum_stock: Mapped[int] = mapped_column(
        Integer,
        default=0,
    )

    active: Mapped[bool] = mapped_column(
        Boolean,
        default=True,
    )