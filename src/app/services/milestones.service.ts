/* tslint:disable:max-line-length */
import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {KidService} from './kid.service';

@Injectable({
    providedIn: 'root'
})
export class MilestonesService {
    doneMilestones = {};

    constructor(private storage: Storage, private kids: KidService) {

    }

    // tslint:disable-next-line:max-line-length
    private _milestonesData = {
        social: {
            '2mo': ['Begins to smile at people', 'Can briefly calm herself (may bring hands to mouth and suck on hand)', 'Tries to look at parent'],
            '4mo': ['Smiles spontaneously, especially at people', 'Likes to play with people and might cry when playing stops', 'Copies some movements and facial expressions, like smiling or frowning'],
            '6mo': ['Knows familiar faces and begins to know if someone is a stranger', 'Likes to play with others, especially parents', 'Responds to other people’s emotions and often seems happy', 'Likes to look at self in a mirror'],
            '9mo': ['May be afraid of strangers', 'May be clingy with familiar adults', 'Has favorite toys'],
            '12mo': ['Is shy or nervous with strangers', 'Cries when mom or dad leaves', 'Has favorite things and people', 'Shows fear in some situations', 'Hands you a book when he wants to hear a story', 'Repeats sounds or actions to get attention', 'Puts out arm or leg to help with dressing', 'Plays games such as “peek-a-boo” and “pat-a-cake”'],
            '18mo': ['Likes to hand things to others as play', 'May have temper tantrums', 'May be afraid of strangers', 'Shows affection to familiar people', 'Plays simple pretend, such as feeding a doll', 'May cling to caregivers in new situations', 'Points to show others something interesting', 'Explores alone but with parent close by'],
            '24mo': ['Copies others, especially adults and older children', 'Gets excited when with other childrenNo image available for this milestone', 'Shows more and more independence', 'Shows defiant behavior (doing what he has been told not to)', 'Plays mainly beside other children, but is beginning to include other children, such as in chase games']
        }, language: {
            '2mo': ['Coos, makes gurgling sounds', 'Turns head toward sound'],
            '4mo': ['Begins to babble', 'Babbles with expression and copies sounds he hears', 'Cries in different ways to show hunger, pain, or being tired'],
            '6mo': ['Responds to sounds by making sounds', 'Strings vowels together when babbling (“ah,” “eh,” “oh”) and likes taking turns with parent while making sounds', 'Responds to own name', 'Makes sounds to show joy and displeasure', 'Begins to say consonant sounds (jabbering with “m,” “b”)'],
            '9mo': ['Understands “no”', 'Makes a lot of different sounds like “mamamama” and “bababababa”', 'Copies sounds and gestures of others', 'Uses fingers to point at things'],
            '12mo': ['Responds to simple spoken requests', 'Uses simple gestures, like shaking head “no” or waving “bye-bye”', 'Makes sounds with changes in tone (sounds more like speech)', 'Says “mama” and “dada” and exclamations like “uh-oh!”', 'Tries to say words you say'],
            '18mo': ['Says several single words', 'Says and shakes head “no”', 'Points to show someone what he wants'],
            '24mo': ['Points to things or pictures when they are named', 'Knows names of familiar people and body parts', 'Says sentences with 2 to 4 words', 'Follows simple instructions', 'Repeats words overheard in conversation', 'Points to things in a book']
        }, cognitive: {
            '2mo': ['Pays attention to faces', 'Begins to follow things with eyes and recognize people at a distance', 'Begins to act bored (cries, fussy) if activity doesn’t change'],
            '4mo': ['Lets you know if he is happy or sad', 'Responds to affection', 'Reaches for toy with one hand', 'Uses hands and eyes together, such as seeing a toy and reaching for it', 'Follows moving things with eyes from side to side', 'Watches faces closely', 'Recognizes familiar people and things at a distance'],
            '6mo': ['Looks around at things nearby', 'Brings things to mouth', 'Shows curiosity about things and tries to get things that are out of reach', 'Begins to pass things from one hand to the other'],
            '9mo': ['Watches the path of something as it falls', 'Looks for things she sees you hide', 'Plays peek-a-boo', 'Puts things in his mouth', 'Moves things smoothly from one hand to the other', 'Picks up things like cereal o’s between thumb and index finger'],
            '12mo': ['Explores things in different ways, like shaking, banging, throwing', 'Finds hidden things easily', 'Looks at the right picture or thing when it’s named', 'Copies gestures', 'Starts to use things correctly; for example, drinks from a cup, brushes hair', 'Bangs two things together', 'Puts things in a container, takes things out of a container', 'Lets things go without help', 'Pokes with index (pointer) finger', 'Follows simple directions like “pick up the toy”'],
            '18mo': ['Knows what ordinary things are for; for example, telephone, brush, spoon', 'Points to get the attention of others', 'Shows interest in a doll or stuffed animal by pretending to feed', 'Points to one body part', 'Scribbles on his own', 'Can follow 1-step verbal commands without any gestures; for example, sits when you say “sit down”'],
            '24mo': ['Finds things even when hidden under two or three covers', 'Begins to sort shapes and colors', 'Completes sentences and rhymes in familiar books', 'Plays simple make-believe games', 'Builds towers of 4 or more blocks', 'Might use one hand more than the other', 'Follows two-step instructions such as “Pick up your shoes and put them in the closet.”', 'Names items in a picture book such as a cat, bird, or dog']
        }, movement: {
            '2mo': ['Can hold head up and begins to push up when lying on tummy', 'Makes smoother movements with arms and legs'],
            '4mo': ['Holds head steady, unsupported', 'Pushes down on legs when feet are on a hard surface', 'May be able to roll over from tummy to back', 'Can hold a toy and shake it and swing at dangling toys', 'Brings hands to mouth', 'When lying on stomach, pushes up to elbows'],
            '6mo': ['Rolls over in both directions (front to back, back to front)', 'Begins to sit without support', 'When standing, supports weight on legs and might bounce', 'Rocks back and forth, sometimes crawling backward before moving forward'],
            '9mo': ['Stands, holding on', 'Can get into sitting position', 'Sits without support', 'Pulls to stand', 'Crawls'],
            '12mo': ['Gets to a sitting position without help', 'Pulls up to stand, walks holding on to furniture (“cruising”)', 'May take a few steps without holding on', 'May stand alone'],
            '18mo': ['Walks alone', 'May walk up steps and run', 'Pulls toys while walking', 'Can help undress herself', 'Drinks from a cup', 'Eats with a spoon'],
            '24mo': ['Stands on tiptoe', 'Kicks a ball', 'Begins to run', 'Climbs onto and down from furniture without help', 'Walks up and down stairs holding on', 'Throws ball overhand', 'Makes or copies straight lines and circles']
        }
    };

    get milestonesData(): { cognitive: { '24mo': string[]; '2mo': string[]; '12mo': string[]; '4mo': string[]; '6mo': string[]; '9mo': string[]; '18mo': string[] }; social: { '24mo': string[]; '2mo': string[]; '12mo': string[]; '4mo': string[]; '6mo': string[]; '9mo': string[]; '18mo': string[] }; language: { '24mo': string[]; '2mo': string[]; '12mo': string[]; '4mo': string[]; '6mo': string[]; '9mo': string[]; '18mo': string[] }; movement: { '24mo': string[]; '2mo': string[]; '12mo': string[]; '4mo': string[]; '6mo': string[]; '9mo': string[]; '18mo': string[] } } {
        return this._milestonesData;
    }

    toggleCheck(index: string) {
        this.doneMilestones[this.kids.currentKidIndex + index] = this.doneMilestones[this.kids.currentKidIndex + index] !== true;
        this.saveMilestones();
    }

    isDone(index: string) {
        return this.doneMilestones[this.kids.currentKidIndex + index] === true;
    }

    initService() {
        this.storage.get('milestones').then((val) => {
            if (val != null) {
                this.doneMilestones = val;
            }
        });
    }

    private saveMilestones() {
        this.storage.set('milestones', this.doneMilestones);
    }

}
