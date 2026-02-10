from fastapi import APIRouter

router = APIRouter()

@router.get("/rooms")
def get_rooms():
    return [
        {"id": 1, "number": "101", "type": "Deluxe Room", "price": 3500, "capacity": 2},
        {"id": 2, "number": "102", "type": "Executive Room", "price": 4500, "capacity": 3},
        {"id": 3, "number": "201", "type": "Suite", "price": 6500, "capacity": 4},
    ]
