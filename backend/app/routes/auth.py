from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel
from jose import jwt, JWTError
from datetime import datetime, timedelta

router = APIRouter()

# JWT settings
SECRET_KEY = "secret123"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60

# Dummy user (no DB yet)
fake_user = {
    "email": "admin@gmail.com",
    "password": "admin123",
    "role": "admin"
}

# Request model
class LoginRequest(BaseModel):
    email: str
    password: str

# Security scheme
security = HTTPBearer()

# 🔐 LOGIN API
@router.post("/login")
def login(data: LoginRequest):
    if data.email != fake_user["email"] or data.password != fake_user["password"]:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)

    token = jwt.encode(
        {
            "sub": data.email,
            "role": fake_user["role"],
            "exp": expire
        },
        SECRET_KEY,
        algorithm=ALGORITHM
    )

    return {
        "access_token": token,
        "token_type": "bearer",
        "role": fake_user["role"]
    }

# 🔒 TOKEN VERIFICATION (USED BY PROTECTED ROUTES)
def verify_token(
    credentials: HTTPAuthorizationCredentials = Depends(security)
):
    try:
        token = credentials.credentials
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
