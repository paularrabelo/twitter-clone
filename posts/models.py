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
