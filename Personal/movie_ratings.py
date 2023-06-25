
#This program will provide the average movie rating from voters.

def movie_rating(votes):
    number_raters = len(votes)
    sum_ratings = sum(votes)
    average_rating = sum_ratings/number_raters
    return average_rating

votes = [1, 4, 9, 3, 8, 3]
average_rating = movie_rating(votes)
print("The average movie rating is", average_rating)



