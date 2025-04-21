from rest_framework import serializers
from .models import Follow, Tweet, Like, Retweet, Comment, Message, Notification

class TweetSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField(read_only=True)
    likes_count = serializers.IntegerField(source='likes.count', read_only=True)
    retweets_count = serializers.IntegerField(source='retweets.count', read_only=True)
    
    class Meta:
        model = Tweet
        fields = ['id', 'author', 'content', 'created_at', 'likes_count', 'retweets_count']

class FollowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follow
        fields = ['id', 'follower', 'following', 'followed_at']

class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ['id', 'user', 'tweet', 'liked_at']

class RetweetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Retweet
        fields = ['id', 'user', 'original_tweet', 'comment', 'retweeted_at']

class CommentSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    tweet = serializers.PrimaryKeyRelatedField(queryset=Tweet.objects.all())

    class Meta:
        model = Comment
        fields = ['id', 'user', 'tweet', 'content', 'created_at']

class MessageSerializer(serializers.ModelSerializer):
    sender = serializers.StringRelatedField(read_only=True)
    receiver = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Message
        fields = ['id', 'sender', 'receiver', 'content', 'sent_at']

class NotificationSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Notification
        fields = ['id', 'user', 'content', 'created_at', 'is_read']

