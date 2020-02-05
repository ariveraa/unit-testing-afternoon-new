import {shortenText} from '../utils/functions';
import{wordCount, attachUserName} from '../../server/utils'; 
import{shortText, longText, posts, users} from './_data_/testData'; 

test('make sure it will not alter text shorter than 100 chars', () => { 
    expect(shortenText(shortText)).toHaveLength(29);
})

test('shorten text should cut of extra chars after 100 and add three periods', () => { 
    const shortened = shortenText(longText); 
    expect(shortened).not.toHaveLength(longText.length); 
    expect(shortened.slice(-3)).toBe('...'); 
})

test('word count should correctly count the number of words in a scentence', () => { 
    expect(wordCount(posts)).toBe(233); 
})

test('should attach the username to the post', ()=> { 
    const newPosts = attachUserName(users, posts); 
    expect(newPosts[0]).toHaveProperty('displayName');
})

test('attachedUserName should remove any post without matching user', () => { 
    const newPosts = attachUserName(users, posts); 
    const deletedPost = posts[5];
    expect(newPosts).not.toContainEqual(deletedPost); 
})