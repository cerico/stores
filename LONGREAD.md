# Does it meet my requirements?

## Intro

This was a larger assignment than expected, really good but I had to cut quite a few corners as it was difficult to find the time to do this test, alongside job and other smaller tests, which were easier to get out of the way. This isn't a criticism of the test, i think its a really great one

## Nginx / Docker / Make

Pretty happy with this part of the application. theres a clean seperation between the front and back containers, a straightforward nginx proxying component and this is fairly maintainable

happiness: 8/10

## Rails

Main issue for me here was the seeds, the json file being huge and quite nested. My Products controller has a limit of 50 products, as i didnt have time to put in any kind of pagination. I actually did this part in parallel with another code test so there's some extra stuff in there, I was looking at pagination/search elements for that one, and ideally would have been looking towards standardizing a rails set up for code tests, but most work has been on front end so havent got as far as that

happiness 5/10

## React / Redux

Reasonably happy with this part, could do with sorting out the containers, components a bit more, got the css in modules which is good. Got the action creatores, reducers and selectors in a standardized form more or less. 

### routes

products page, product page, collection page

### add to collection

Just went with the one wishlist/collection, no modal or anything like that, it uses local storage to store the product id, then a selector brings back products with the matching id for a wishlist/collection page

the add/remove button is always a remove on the collection page, but is sadly just an add button on the main products index page, didnt have time to change that to an add/remove depending on if its in collection or not

happiness 7/10 missing some functionality

## Design

basic. wanted to sort the images out and alignment, didnt show much of the data other than just the name of the product. is responsive on the index page, less so on in the individual project page

happiness 5/10

## Deployment

Not part of remit, nginx has a production conf to listen on port 80, so should just be a matter of pushing the containers up to digital ocean.

happiness 5/10 didnt do it but groundwork is there

## Overall 

I wasnt super happy with any particular part of what I've done, but im kind of happier with the overall project than any of the constituent parts. it broadly works, and i think it can be built on

# Does it meet your requirements?

## Testing

no, it fails miserably as there are no tests

happiness 0/10

## Application Structure

Overall structure and React/Redux structure are both good, Rails structure is ok but thought about that in terms of structure less

happiness 9/10

## Tooling

I'm pleased with the Makefile, which is a good launchpad for an app with multiple containers, and should be easy to add to

happiness 9/10

## Documentation

Well, theres this! and a more basic readme too

happiness 6/10

##  Style/syntax

going to throw this in together with the application structure and say good with react, redux, docker and general, less so with the rails part

happiness 8/10
