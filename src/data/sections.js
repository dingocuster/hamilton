
var sections = [
  {
    id: 'header',
    topMultiple: -0.2,
    bottomMultiple: 1,
    vizTopMultiple: 0.05,
    vizAlign: 'right',
    vizType: 'image',
    style: {
      width: '45%',
      top: 0,
      marginBottom: '75vh',
      margin: 20,
      padding: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
    },
    text: `
<center>
  <h1>
    An Interactive Visualization of<br />
    Every Line in Hamilton
  </h1>
  <sup>BY [SHIRLEY WU](http://twitter.com/sxywu)</sup>
</center>

The [hype](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=hamilton%20hype) around [Hamilton](http://www.hamiltonbroadway.com/) is astronomical, so I was understandably doubtful at first.  But from the moment I sat down to listen the whole way through, I was done for.

I was obsessed.  I had the soundtrack on repeat for months, it was all I listened to in my waking hours.  I listened so much I had favorite lines and favorite songs.  I analyzed the lyrics; I reveled in the layers of complexity, the double entredres, the clever word plays.

Then my obsession hit a peak: <span style='font-size: 16px'>**I started to wonder what a visualization of Hamilton would look like.**</span>
    `
  },
  {
    id: 'intro1',
    vizAlign: 'left',
    vizType: 'character',
    style: {
      marginTop: '100vh',
    },
    clips: [['/music/ouioui.mp3', ['5/2:40-44']]],
    text: `
I first heard Hamilton while visiting my friend in St. Louis for her birthday.  For that entire weekend, I heard the same song on repeat:

<span class='music' data-char='5' data-clip='0'>
  <span class='control'></span>
  Oui oui, mon ami, je m’apelle Lafeyette! &nbsp;<br />
  &nbsp; The Lancelot of the Revolutionary set! &nbsp;<br />
  &nbsp; I came from afar, just to say “Bonsoir!” &nbsp;<br />
  &nbsp; Tell the King, “Casse toi!” Who’s the best? &nbsp;<br />
  &nbsp; C’est moi! &nbsp;
</span>


Catchy as it was, I hated the song by day two, and was ready to throttle her by day three; I flew back to San Francisco cursing Hamilton.

The second time I heard about Hamilton, I was in New York.  I was having coffee with a friend when he told me about being in a car with Hamilton for two hours.  He was doubtful at first (“a hip-hop musical?”), but as it went on, he was overwhelmed by how transformative it was (“why am I crying over some guy I don’t even know?”).

After that glowing review, I knew I had to at least give it a try.
    `
  },
];

export default sections;
