/**
 * Created by Ani on 8/10/2016.
 */
//this function takes list of movies as input and a specific title name
//if the movie title matches with the given title inject titlematch as true flag in to each movie object
//else set the above flag top false
//return the list of movies

function titleMatch(list_movies, desired) {
var x;


    for(i = 0; i < (list_movies.length); i++)

    {
        x=list_movies[i];
        console.log(x.Title);
        console.log(desired);
         if(x.Title === desired)

         {

            x.titleMatch = true;
        }
        else{
            x.titleMatch = false;
        }
    }
    return list_movies;
}

module.exports.titleMatch = titleMatch;
