from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TweetViewSet, RetweetViewSet, FollowViewSet, LikeViewSet

router = DefaultRouter()
router.register(r'posts', TweetViewSet)
router.register(r'follows', FollowViewSet)
router.register(r'likes', LikeViewSet)
router.register(r'retweets', RetweetViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
