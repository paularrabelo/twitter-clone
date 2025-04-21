from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TweetViewSet, RetweetViewSet, FollowViewSet, LikeViewSet, CommentViewSet, MessageViewSet, NotificationViewSet

router = DefaultRouter()
router.register(r'posts', TweetViewSet)
router.register(r'follows', FollowViewSet)
router.register(r'likes', LikeViewSet)
router.register(r'retweets', RetweetViewSet)
router.register(r'comments', CommentViewSet, basename='comment')
router.register(r'messages', MessageViewSet, basename='message')
router.register(r'notifications', NotificationViewSet, basename='notification')

urlpatterns = [
    path('', include(router.urls)),
]
