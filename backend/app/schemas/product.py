from pydantic import BaseModel


class ProductCreate(BaseModel):
    sku: str
    product_name: str
    brand: str = "OSOAA"
    category: str
    flavour: str = ""
    size: str = ""
    mrp: float
    gst: int = 18
    minimum_stock: int = 0


class ProductResponse(ProductCreate):
    id: int
    active: bool

    class Config:
        from_attributes = True