INSERT INTO users (username, password)
VALUES ('demo', 'demopassword'),('newUser', 'demoUser');

INSERT INTO tags (tag)
VALUES 
('Arts & Crafts'),
('Education'),
('Family Friendly'),
('Food & Beverage'),
('Gaming'),
('Health & Wellness'),
('Home Improvement'),
('Music');

INSERT INTO cards (title, content, tags, tries, author)
VALUES 
('Wine Painting', 'Opened a bottle of wine & followed Bob Ross tutorials with my best friend.', 1, 5, 2),
('Baking custom cookies', 'Made custom-shaped cookies with my daughter.', 4, 3, 1),
('Monopoly', 'Made a life-sized version of monopoly with a twist.', 3, 1, 1),
('Crafting Cocktails', 'Experimented with trying to creat the next best cocktail.', 4, 4,1),
('Nintendo64', 'Bought a refurbished n64 online and introduced my children to the best video games ever made.',5,34,2),
('Yoga', 'Decided to get into yoga and meditation..Safe to say that yoga is more difficult then I thought.', 6,12,1),
('Man Cave', 'With all of this free time, I finally decided to tackle the important things in life: making the ultimate man cave.',7,36,1),
('Guitar Lessons', 'Decided to take a free course on YouTube to finally learn the guitar..Hopefully women acknowledge my existence.', 8,37,2);








-- password is 'demopassword'
-- INSERT INTO users (email, password) 
-- VALUES
-- ('demo@demo.com', '$2a$04$DjkbEZXF5djK5j/wgpjBY.vqOxiqvUk5tXUSlvwQIv0sOOmmFV/O6');

-- INSERT INTO collections (user_id, collection_name)
-- VALUES
-- (1, 'React Front'),
-- (1, 'Node Server'),
-- (1, 'Django Server'),
-- (1, 'Friendship');