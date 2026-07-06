from datetime import datetime

from sqlalchemy import DateTime
from sqlalchemy import ForeignKey
from sqlalchemy import Integer
from sqlalchemy import String

from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column

from app.db.base import Base


class StockMovement(Base):
    __tablename__ = "stock_movements"

    id: Mapped[int] = mapped_column(primary_key=True)

    product_id: Mapped[int] = mapped_column(
        ForeignKey("products.id")
    )

    movement_type: Mapped[str] = mapped_column(
        String(20)
    )

    channel: Mapped[str] = mapped_column(
        String(50)
    )

    portal: Mapped[str] = mapped_column(
        String(100)
    )

    quantity: Mapped[int] = mapped_column(
        Integer
    )

    reference: Mapped[str] = mapped_column(
        String(100)
    )

    remarks: Mapped[str] = mapped_column(
        String(255),
        default=""
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow
    )