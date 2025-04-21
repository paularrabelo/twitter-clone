from django.db import models
from django.utils import timezone
from users.models  import CustomUser

# Modelo de Tweet
class Tweet(models.Model):
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='tweets')
    content = models.CharField(max_length=280)
    created_at = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return f"{self.author.username}: {self.content[:50]}"

# Modelo de Seguidores
class Follow(models.Model):
    follower = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='following')
    following = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='followers')
    followed_at = models.DateTimeField(default=timezone.now)
    
    class Meta:
        unique_together = ('follower', 'following')
    
    def __str__(self):
        return f"{self.follower.username} -> {self.following.username}"

# Modelo de Curtidas
class Like(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    tweet = models.ForeignKey(Tweet, on_delete=models.CASCADE, related_name='likes')
    liked_at = models.DateTimeField(default=timezone.now)
    
    class Meta:
        unique_together = ('user', 'tweet')
    
    def __str__(self):
        return f"{self.user.username} liked tweet {self.tweet.id}"

# Modelo de Retweets
class Retweet(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    original_tweet = models.ForeignKey(Tweet, on_delete=models.CASCADE, related_name='retweets')
    comment = models.CharField(max_length=280, blank=True, null=True)
    retweeted_at = models.DateTimeField(default=timezone.now)
    
    class Meta:
        unique_together = ('user', 'original_tweet')
    
    def __str__(self):
        return f"{self.user.username} retweeted tweet {self.original_tweet.id}"

class Comment(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    tweet = models.ForeignKey(Tweet, on_delete=models.CASCADE, related_name='comments')
    content = models.CharField(max_length=280)
    created_at = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return f"Comment by {self.user.username} on tweet {self.tweet.id}"
    

class Message(models.Model):
    sender = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='sent_messages')
    receiver = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='received_messages')
    content = models.TextField()
    sent_at = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return f"Message from {self.sender.username} to {self.receiver.username}"

class Notification(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='notifications')
    content = models.CharField(max_length=280)
    created_at = models.DateTimeField(default=timezone.now)
    is_read = models.BooleanField(default=False)
    
    def __str__(self):
        return f"Notification for {self.user.username}: {self.content[:50]}"

