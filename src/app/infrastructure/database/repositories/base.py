from abc import ABC, abstractmethod

#определние путых методов в репозитории для дальнейшего переопределения
class BaseRepository(ABC):
    @abstractmethod
    async def get_one(self, **kwargs):
        pass

    @abstractmethod
    async def add_one(self, **kwargs):
        pass

    @abstractmethod
    async def remove_one(self, **kwargs):
        pass
