from fastapi import APIRouter

router = APIRouter()


@router.get("/health", tags=["Health"])
def health():
    return {
        "status": "healthy",
        "service": "DJ Brain API",
        "version": "1.0.0",
    }