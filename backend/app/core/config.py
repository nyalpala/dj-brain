from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "DJ Brain"

    app_version: str = "1.0.0"

    app_env: str = "development"

    debug: bool = True

    api_v1_prefix: str = "/api/v1"

    database_url: str

    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=False,
    )


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()