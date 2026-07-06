from fastapi import FastAPI

app = FastAPI(
    title="DJ Brain API",
    version="1.0.0",
    description="Backend API for DJ Brain",
)


@app.get("/")
def root():
    return {
        "application": "DJ Brain",
        "version": "1.0.0",
        "status": "running",
    }