const guitars = [
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/Starter-Acoustic-Guitar-Walnut/519266000115000-00-220x220.jpg',
    name: 'Rogue Starter Acoustic Guitar',
    price: 59.99,
    guitURL:
      'https://www.guitarcenter.com/Rogue/Starter-Acoustic-Guitar-Walnut-1275776901291.gc',
    rating: 1.98,
    description:
      'The small-bodied Rogue Starter Acoustic Guitar is an amazing deal for a starter guitar. Its smaller profile (7/8" scale) makes it very playable for kids or aspiring guitarists with smaller body frames and hands. It has a maple neck and select hardwood fretboard which produce an exquisite tone.',
    brand: 'Rogue',
    countInStock: 7,
    numReviews: 5,
    category: 'Acoustic',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/2004-Srv-Number-1-Tribute-Solid-Body-Electric-Guitar/000000116960915-00-220x220.jpg',
    name: 'Fender 2004 Srv Number 1 Tribute Solid Body Electric Guitar',
    price: 46999.99,
    guitURL:
      'https://www.guitarcenter.com/Used/Fender/2004-Srv-Number-1-Tribute-Solid-Body-Electric-Guitar.gc',
    rating: 2.15,
    description:
      'Used Fender 2004 Srv Number 1 Tribute Solid Body Electric Guitar',
    brand: 'Fender',
    countInStock: 12,
    numReviews: 5,
    category: 'Electric',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/SG-Traditional-Pro-Electric-Guitar-Metallic-Gold/L79164000003000-00-220x220.jpg',
    name: 'Epiphone SG Traditional Pro Electric Guitar',
    price: 449,
    guitURL:
      'https://www.guitarcenter.com/Epiphone/SG-Traditional-Pro-Electric-Guitar-Metallic-Gold-1500000330635.gc',
    rating: 3.62,
    description:
      'The Epiphone SG Traditional PRO recreates a legendary ’60s classic with updated touches for modern players. Part of the “Inspired by Gibson” collection, this SG keeps with tradition by using mahogany for the neck and body. A Kalamzoo headstock also gives a nod to the SG’s storied past. The Trad PRO SG sports dual Alnico Classic PRO humbuckers. Alnico V magnets provide more output; expect vintage tones with a serious bite and tight bass response. Push/pull pots split each pickup for single-coil sounds. The Epiphone SG features a double-cutaway design, allowing full access to all 22 frets. A slim taper neck and rolled fretboard edges provide a comfortable and fast playing feel. Thanks to the LockTone tune-o-matic bridge and stopbar tailpiece, the Trad Pro can sustain even the wildest windmill strums. Other features include an Indian laurel fretboard, plus a Graph Tech NuBone nut, which balances the sound from string to string.',
    brand: 'Epiphone',
    countInStock: 3,
    numReviews: 4,
    category: 'Electric',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/RA-090-Dreadnought-Acoustic-Guitar-Natural/423794000010000-00-220x220.jpg',
    name: 'Rogue RA-090 Dreadnought Acoustic Guitar',
    price: 89.99,
    guitURL:
      'https://www.guitarcenter.com/Rogue/RA-090-Dreadnought-Acoustic-Guitar-Natural-1274115039668.gc',
    rating: 3.03,
    description:
      'From Rogue comes this amazing deal in the RA-90 dreadnought acoustic guitar. The Rogue guitar is an ideal instrument for the beginner, or young musician. The body depth and width bring out balanced tone and plenty of projection to be heard from across the room.This ultra-affordable dreadnought acoustic guitar features a whitewood body, which brings out lots of mid-range punch. The nato neck adds sustain without losing any strength in tone. The painted maple bridge and fingerboard add clarity to each note, and a striking look to the front of the guitar. The RA-090\'s C-shape neck, 1-2/3" nut width, and 16" radius help with intricate fretboard movements when running up and down the 20 frets. The RA-90 also features nickel hardware and covered tuners. This Rogue acoustic guitar will certainly get the job done, at a price that anybody can afford. Case sold separately',
    brand: 'Rogue',
    countInStock: 8,
    numReviews: 5,
    category: 'Acoustic',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/Les-Paul-Special-I-Limited-Edition-Electric-Guitar-Worn-Black/H71861000002000-00-220x220.jpg',
    name: 'Epiphone Les Paul Special-I Limited-Edition Electric Guitar',
    price: 159,
    guitURL:
      'https://www.guitarcenter.com/Epiphone/Limited-Edition-Les-Paul-Special-I-Electric-Guitar-Worn-Black-1296155735782.gc',
    rating: 3.11,
    description:
      'This is a limited-edition version of Epiphone\'s number-one-selling model is now available with a choice of "worn" finishes. The Epiphone Les Paul Special-I limited-edition electric guitar is a great way for beginners to get started on guitar with real Les Paul tone and feel. But seasoned pros also love the Special-I because it\'s a great-sounding, workhorse guitar that lets them leave their more expensive axes at home.\n The authentic LP power starts with an basswood, trademarked Les Paul body with a bolted-on "1960s" SlimTaper mahogany neck featuring a 21-fret fingerboard with dot inlays. The limited-edition Special-I is voiced by a pair of hot open-coil Epiphone 700T and 650R humbucker pickups, giving it massive, unmistakable Les Paul tone. Like all of Epiphone\'s electric guitars, it comes standard-equipped with 500K potentiometers for the master volume and master tone controls, plus Epiphone\'s heavy-duty 3-way pickup selector toggle switch and exclusive non-rotating heavy-duty output jack. This value champ also now features nickel hardware including an intonated, one-piece wraparound bridge stopbar.',
    brand: 'Epiphone',
    countInStock: 2,
    numReviews: 10,
    category: 'Electric',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/Les-Paul-Studio-Electric-Guitar-Wine-Red/L54490000001000-00-220x220.jpg',
    name: 'Gibson Les Paul Studio Electric Guitar',
    price: 1499,
    guitURL:
      'https://www.guitarcenter.com/Gibson/Les-Paul-Studio-Electric-Guitar-Wine-Red-1500000274002.gc',
    rating: 3.58,
    description:
      'The Les Paul Studio embodies the essential Les Paul features with enhancements for playability and tonal versatility. The rosewood fingerboard and slim taper mahogany neck provide effortless playability and comfort. The 490R and 498T pickups provide tight, high-output humbucking performance and the two push-pull pots offer additional coil-tapping options.',
    brand: 'Gibson',
    countInStock: 0,
    numReviews: 3,
    category: 'Electric',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/F335-Acoustic-Guitar-Black/512940000001000-00-220x220.jpg',
    name: 'Yamaha F335 Acoustic Guitar',
    price: 159.99,
    guitURL:
      'https://www.guitarcenter.com/Yamaha/F335-Acoustic-Guitar-Black-1274115033905.gc',
    rating: 1.94,
    description:
      "Yamaha's F335 gives you that classic dreadnought shape and sound at a price point that won't break your bank. The F335's tonewood combination includes a laminate spruce top, rosewood fingerboard and bridge, and meranti back and sides. Gold die-cast tuners provide smooth and accurate tuning while a tortoise-pattern pickguard gives a bit more style.\nCase sold separately",
    brand: 'Yamaha',
    countInStock: 8,
    numReviews: 9,
    category: 'Acoustic',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/RA-090-Concert-Acoustic-Guitar-Natural/J17592000001000-00-220x220.jpg',
    name: 'Rogue RA-090 Concert Acoustic Guitar',
    price: 69.99,
    guitURL:
      'https://www.guitarcenter.com/Rogue/RA-090-Concert-Acoustic-Guitar-Natural-1416325129027.gc',
    rating: 1.39,
    description:
      'The super-affordable Rogue RA-090 Concert Acoustic Guitar is an excellent entry-level 25.4 in. scale guitar with laminate whitewood body and top finished off by a natural gloss to keep it in peak condition for years. Other features include a nato C-shaped neck, simulated rosewood fingerboard, simulated belly bridge, and an ivory color plastic saddle and nut.',
    brand: 'Rogue',
    countInStock: 10,
    numReviews: 8,
    category: 'Acoustic',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/Les-Paul-Traditional-Pro-IV-Limited-Edition-Electric-Guitar-Worn-Wine-Red/L79036000003000-00-220x220.jpg',
    name: 'Epiphone Les Paul Traditional Pro IV Limited-Edition Electric Guitar',
    price: 449,
    guitURL:
      'https://www.guitarcenter.com/Epiphone/Les-Paul-Traditional-Pro-IV-Limited-Edition-Electric-Guitar-Worn-Wine-Red-1500000327513.gc',
    rating: 2.88,
    description:
      'The Epiphone Les Paul Trad Pro IV offers fans the most popular electric guitar ever made in four vintage "worn" finishes. Equipped with powerful Alnico Classic Pro humbuckers, the Les Paul Trad Pro delivers the warm tone of traditional rock along with the nostalgic look for a fully immersive playing experience. For additional sonic sculpting, this Les Paul also features a treble bleed circuit to keep the treble present even when volume is lowered and push/pull volume controls for coil splitting. Inspired by the original legendary guitar, the Les Paul Trad Pro IV is a stylish addition to any players collection.',
    brand: 'Epiphone',
    countInStock: 12,
    numReviews: 4,
    category: 'Electric',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/Rocketeer-Electric-Guitar-Pack-Blue/430930000004000-00-220x220.jpg',
    name: 'Rogue Rocketeer Electric Guitar Pack',
    price: 199.99,
    guitURL:
      'https://www.guitarcenter.com/Rogue/Rocketeer-Electric-Guitar-Pack-Blue-1275425410280.gc',
    rating: 3.64,
    description:
      "The Rogue Rocketeer electric guitar package includes the RR100 double cutaway guitar, gig bag, strap, guitar cable, picks, and a Rogue G10 solid-state guitar amp.\n\nRogue Rocketeer RR100\nThe Rocketeer RR100 is Rogue's take on a classic design, built for ease of playability. It is constructed with a lightweight contoured double-cutaway paulownia body. The ultra-thin, comfortable bolt-on maple neck makes it easy to fly up and down the 22-fret fingerboard with ease. The humbucker/dual single-coil pickup configuration with a 5-way switch allows for a wide-variety of tones. A 6-screw vintage tremolo lets you have tons of whammy bar fun, while die-cast tuners ensure solid tuning stability. A gig bag is included.\n\nRogue G10 Solid State Amplifier\nThe Rogue G10 Solid State Amplifier makes a great practice amp, and features a single input with Volume, Gain, Treble and Bass controls. Boost your sound with the Power boost select button, and practice using the included headphone jack.\n\nCheck the drop-down menu to the right to select colors and/or other options.",
    brand: 'Rogue',
    countInStock: 10,
    numReviews: 3,
    category: 'Combo',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/Player-Stratocaster-HSS-Plus-Top-Maple-Fingerboard-Limited-Edition-Electric-Guitar-Sienna-Sunburst/L46829000002000-00-220x220.jpg',
    name: 'Fender Player Stratocaster HSS Plus Top Maple Fingerboard Limited-Edition Electric Guitar',
    price: 809.99,
    guitURL:
      'https://www.guitarcenter.com/Fender/Player-Stratocaster-HSS-Plus-Top-Maple-Fingerboard-Limited-Edition-Electric-Guitar-Sienna-Sunburst-1500000293775.gc',
    rating: 1.22,
    description:
      "Over the decades, players have been continually inspired by the sound of a Strat. From the clarity of the high end, through the gut punch of the mids and the solid lows, it's a sound that's helped define what an electric guitar should be—versatile enough for any style and broad enough for any player to find an individual voice. This Limited-Edition Player Series Stratocaster puts all of the classic features of the Strat at your fingertips while adding a modern edge, plus a bridge position humbucker for a little more rock-and-roll attitude. With a beautifully flamed maple top over a solid alder body, a 22-fret maple fingerboard with a contemporary 9.5\" radius for easy bending and an updated 2-point fulcrum tremolo bridge, the Player Series Stratocaster Plus Top is primed and ready to carry you along your musical voyage.\n\nIf you're the kind of Strat player who wants more punch out of the bridge position, this distinctive Limited-Edition Fender Standard HSS Stratocaster is made for you. It's got that classic look and feel that only a Strat can deliver, with the added muscle of a humbucking pickup, so you can go from glassy single-coil tones to heavyweight growl and scream with the flip of a switch. This special Strat features a cool look with Blue Burst finish and Black pickguard. Case sold separately.",
    brand: 'Fender',
    countInStock: 2,
    numReviews: 3,
    category: 'Electric',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/FA-135CE-Concert-Acoustic-Electric-Guitar-Black/L44601000001000-00-220x220.jpg',
    name: 'Fender FA-135CE Concert Acoustic-Electric Guitar',
    price: 199.99,
    guitURL:
      'https://www.guitarcenter.com/Fender/FA-135CE-Concert-Acoustic-Electric-Guitar-Black-1500000254301.gc',
    rating: 3.64,
    description:
      'The Fender FA-135CE Concert Acoustic Guitar is built on the concert-style platform for a sleek, modern design. The laminated spruce top features X-bracing for bright, punchy tone, ideal for lead guitar. The neck is nato, and the back and sides are laminated basswood-both tonewoods known for letting the mid and high frequencies sing out.\n\nThanks to the basswood back and sides, the Fender FA-135CE is very light, avoiding strain to your neck or back during prolonged playing. The chrome tuners offer precision tuning. The guitar also features an impressive electronics system, featuring the Fishman ION-T preamp and built-in chromatic tuner, which provides lightning-fast tuning and amplification. The preamp features a volume dial, phase and contour buttons, and a tuner power button.\n\nThe FA-135CE is fashioned with a gloss polyurethane finish, aged fretboard and body bindings, and a white concentric ring rosette that offers a striking contrast, and an appearance as beautiful as its sound.\n\nCase sold separately.',
    brand: 'Fender',
    countInStock: 3,
    numReviews: 4,
    category: 'Acoustic',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/G2627T-Streamliner-Center-Block-3-pickup-Cateye-With-Bigsby-Electric-Guitar-Georgia-Green/L51611000001000-00-220x220.jpg',
    name: 'Gretsch Guitars G2627T Streamliner Center Block 3-pickup "Cateye" With Bigsby Electric Guitar',
    price: 599.99,
    guitURL:
      'https://www.guitarcenter.com/Gretsch-Guitars/G2627T-Streamliner-Center-Block-3-pickup-Cateye-with-Bigsby-Electric-Guitar-Georgia-Green-1500000266284.gc',
    rating: 3.62,
    description:
      'The Gretsch G2627T Streamliner is a vintage guitar in a modern instrument. Brash and feedback-resistant thanks to its center block design, this G2627T Streamliner pays tribute to the past with the Bigsby B70 vibrato tailpiece and Cateye f-holes. Gretsch guitars have always had inherent style, but for the Streamliner, the sound is just as important. It features three Broad’Tron humbucking pickups—some of the most powerful pickups made by Gretsch—that are both high output and high fidelity. Available at Guitar Center, the Streamliner Center Block Cateye is ideal for players who want a classic-looking guitar with sounds that fit into any context.',
    brand: 'Gretsch',
    countInStock: 2,
    numReviews: 5,
    category: 'Electric',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/Player-Stratocaster-Maple-Fingerboard-Electric-Guitar-Capri-Orange/L21533000006000-00-220x220.jpg',
    name: 'Fender Player Stratocaster Maple Fingerboard Electric Guitar',
    price: 749.99,
    guitURL:
      'https://www.guitarcenter.com/Fender/Player-Stratocaster-Maple-Fingerboard-Electric-Guitar-Capri-Orange-1500000286217.gc',
    rating: 1.14,
    description:
      "Over the decades, players have been continually inspired by the sound of a Strat. From the clarity of the high end, through the gut punch of the mids and the solid lows, it's a sound that's helped define what an electric guitar should be—versatile enough for any style and broad enough for any player to find an individual voice. This Player Series Stratocaster puts all of the classic features of the Strat at your fingertips while adding a modern edge, including a modern neck profile, medium-jumbo frets and a freshly redesigned 2-point fulcrum vibrato bridge. With a beautiful gloss finish over a solid alder body, a 22-fret pau ferro fingerboard with a contemporary 9.5\" radius for easy bending, the Player Series Stratocaster is primed and ready to carry you along your musical voyage.",
    brand: 'Fender',
    countInStock: 6,
    numReviews: 3,
    category: 'Electric',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/Stratocaster-Electric-Guitar-Pack-With-Squier-Frontman-10G-Amp-Black/L25659000001000-00-220x220.jpg',
    name: 'Squier Stratocaster Electric Guitar Pack With Squier Frontman 10G Amp',
    price: 219.99,
    guitURL:
      'https://www.guitarcenter.com/Squier/Stratocaster-Electric-Guitar-Pack-with-Fender-Frontman-10G-Amp-Black-1500000221873.gc',
    rating: 1.1,
    description:
      'A perfect choice for beginners, the Squier Strat Pack has everything you need to begin playing right out of the box.\n\nThe Stratocaster is ideal for beginning players and provides a comfortable playing feel. It includes a lightweight body, a vintage-style tremolo bridge for classic pitch effects and three single-coil pickups for classic Strat tone. We also included a free 3-month subscription to Fender Play—the easiest way to learn guitar.\n\nThe included Squier Frontman 10G amplifier is the perfect companion for jamming thanks to its aux input that allows you play along with your favorite songs or backing tracks, as well as a headphone jack for silent practice. The Squier Starter Strat Pack also comes with a padded gig bag, strap, cable and picks—everything you need to stop dreaming and start playing.',
    brand: 'Squier',
    countInStock: 10,
    numReviews: 1,
    category: 'Combo',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/RA-090-Concert-Cutaway-Acoustic-Electric-Guitar-Blue-Burst/J17594000003000-00-220x220.jpg',
    name: 'Rogue RA-090 Concert Cutaway Acoustic-Electric Guitar',
    price: 119.99,
    guitURL:
      'https://www.guitarcenter.com/Rogue/RA-090-Concert-Cutaway-Acoustic-Electric-Guitar-Blue-Burst-1500000029405.gc',
    rating: 3.02,
    description:
      'The super-affordable Rogue RA-090 Concert Acoustic-Electric Guitar is an excellent entry-level 25.4 in. scale guitar with laminate whitewood body and top finished off by a natural gloss to keep it in peak condition for years. Other features include a single cutaway, nato C-shaped neck, simulated rosewood fingerboard, simulated rosewood belly bridge, and an ivory color plastic saddle and nut. Rounding out its fabulous features is an Eden MET-A06 undersaddle pickup system with 3-band EQ and tuner.',
    brand: 'Rogue',
    countInStock: 0,
    numReviews: 9,
    category: 'Acoustic',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/Limited-Edition-Bullet-Telecaster-Electric-Guitar-Red-Sparkle/L21128000001000-00-220x220.jpg',
    name: 'Squier Limited-Edition Bullet Telecaster Electric Guitar',
    price: 179.99,
    guitURL:
      'https://www.guitarcenter.com/Squier/Limited-Edition-Bullet-Telecaster-Electric-Guitar-Red-Sparkle-1500000219365.gc',
    rating: 2.75,
    description:
      'Equally at home in rock, jazz, blues or country, this limited-edition Bullet Tele is a simple, affordable and practical guitar designed for beginners and students. A perfect choice for a first guitar no matter who you are or what style of music you want to learn. Featuring the classic features that made the Tele one of the world’s favorite guitars, the Bullet Tele is a great introduction to the Fender family.\n\nCase sold separately.',
    brand: 'Squier',
    countInStock: 12,
    numReviews: 9,
    category: 'Electric',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/Affinity-Stratocaster-Electric-Guitar-Surf-Green/L34912000003000-00-220x220.jpg',
    name: 'Squier Affinity Stratocaster Electric Guitar',
    price: 229.99,
    guitURL:
      'https://www.guitarcenter.com/Squier/Affinity-Stratocaster-Electric-Guitar-Surf-Green-1500000235862.gc',
    rating: 2.73,
    description:
      "The best value available today in electric guitar design, Squier Affinity Series guitars deliver solid sound with slick style. The Affinity Series Stratocaster combines the classic features that made the Stratocaster a rock 'n' roll favorite: sonic flexibility, authentic Fender sound, vintage style and eye-catching finishes.",
    brand: 'Squier',
    countInStock: 8,
    numReviews: 10,
    category: 'Electric',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/Affinity-Series-Stratocaster-HSS-Electric-Guitar-Pack-with-Fender-Frontman-15G-Amp-Candy-Apple-Red/L25739000001000-00-220x220.jpg',
    name: 'Squier Affinity Series Stratocaster HSS Electric Guitar Pack with Fender Frontman 15G Amp',
    price: 329.99,
    guitURL:
      'https://www.guitarcenter.com/Squier/Affinity-Series-Stratocaster-HSS-Electric-Guitar-Pack-with-Fender-Frontman-15G-Amp-Candy-Apple-Red-1500000221908.gc',
    rating: 1.03,
    description:
      'Equally at home in rock, jazz, blues or country, this limited-edition Bullet Tele is a simple, affordable and practical guitar designed for beginners and students. A perfect choice for a first guitar no matter who you are or what style of music you want to learn. Featuring the classic features that made the Tele one of the world’s favorite guitars, the Bullet Tele is a great introduction to the Fender family.\n\nCase sold separately.',
    brand: 'Squier',
    countInStock: 7,
    numReviews: 6,
    category: 'Combo',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/Les-Paul-Standard-60s-Electric-Guitar-Iced-Tea/L54578000001000-00-220x220.jpg',
    name: "Gibson Les Paul Standard '60s Electric Guitar",
    price: 2499,
    guitURL:
      'https://www.guitarcenter.com/Gibson/Les-Paul-Standard-60s-Electric-Guitar-Iced-Tea-1500000274118.gc',
    rating: 3.31,
    description:
      "The Gibson Les Paul Standard ’60s replicates the historic models adopted by some of the most legendary players of all time. It features a solid mahogany body with an AA figured maple top; the mahogany neck has a '60s-style SlimTaper profile. Loaded with a calibrated pair of BurstBucker 61 pickups and hand-wired controls, it's got a huge voice that's always ready to rock. Time-tested hardware includes an ABR-1 bridge, stopbar tailpiece and Grover Rotomatic tuners. It comes with a hardshell case.",
    brand: 'Gibson',
    countInStock: 5,
    numReviews: 0,
    category: 'Electric',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/Les-Paul-Standard-50s-Electric-Guitar-Tobacco-Burst/L54575000003000-00-220x220.jpg',
    name: "Gibson Les Paul Standard '50s Electric Guitar",
    price: 2499,
    guitURL:
      'https://www.guitarcenter.com/Gibson/Les-Paul-Standard-50s-Electric-Guitar-Tobacco-Burst-1500000274113.gc',
    rating: 2.22,
    description:
      "Returning to the roots of a classic, this Les Paul Standard '50s oozes authenticity and serves as a reminder of Gibson's history of innovation. The traditional figured maple on mahogany construction and '50s neck profile bear a gorgeous nitro-lacquer finish for that legendary look. Looking back to the transition that took place in 1957, the guitar boasts calibrated Alnico II BurstBucker pickups and hand-wired controls. A truly timeless electric that's as satisfying to play today as it was 6 decades ago, it's ready for your musical explorations.",
    brand: 'Gibson',
    countInStock: 6,
    numReviews: 1,
    category: 'Electric',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/American-Professional-Stratocaster-Maple-Fingerboard-Electric-Guitar-Black/J46217000003000-00-220x220.jpg',
    name: 'Fender American Professional Stratocaster Maple Fingerboard Electric Guitar',
    price: 1449.99,
    guitURL:
      'https://www.guitarcenter.com/Fender/American-Professional-Stratocaster-Maple-Fingerboard-Electric-Guitar-Black-1500000030471.gc',
    rating: 2.13,
    description:
      "Returning to the roots of a classic, this Les Paul Standard '50s oozes authenticity and serves as a reminder of Gibson's history of innovation. The traditional figured maple on mahogany construction and '50s neck profile bear a gorgeous nitro-lacquer finish for that legendary look. Looking back to the transition that took place in 1957, the guitar boasts calibrated Alnico II BurstBucker pickups and hand-wired controls. A truly timeless electric that's as satisfying to play today as it was 6 decades ago, it's ready for your musical explorations.",
    brand: 'Fender',
    countInStock: 5,
    numReviews: 4,
    category: 'Electric',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/Player-Telecaster-Maple-Fingerboard-Electric-Guitar-3-Color-Sunburst/L21565000001000-00-220x220.jpg',
    name: 'Fender Player Telecaster Maple Fingerboard Electric Guitar',
    price: 749.99,
    guitURL:
      'https://www.guitarcenter.com/Fender/Player-Telecaster-Maple-Fingerboard-Electric-Guitar-3-Color-Sunburst-1500000219408.gc',
    rating: 3.99,
    description:
      "From a whisper to a scream, from pure country twang to serious rock and roll—even jazz—there are few guitars as outright versatile as a Telecaster. Respecting that long and storied heritage, while enhancing the instrument with the kinds of contemporary innovations that appeal to both casual and professional players, the Fender Player Series Telecaster puts a modern edge on the authentic Tele tone and vibe. Starting with a classic solid alder body loaded with Fender's Player Series Alnico V single-coil Tele pickups, the Player Series Tele adds a satin-finish Modern-C profile neck with a smooth, fast 9.5\"-radius fingerboard and 22 medium-jumbo frets for clean, easy bending and expanded range. The thru-body-strung, six-saddle bridge provides precise intonation and the steel saddles add some extra bite to the Tele's traditional twang. A true workhorse for virtually every musical genre, The Player Telecaster may be the guitar you'll play for the rest of your life, no matter how large your collection may grow.",
    brand: 'Fender',
    countInStock: 2,
    numReviews: 12,
    category: 'Electric',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/John-Mayer-Silver-Sky-Electric-Guitar-Roxy-Pink/L18249000012000-00-220x220.jpg',
    name: 'PRS John Mayer Silver Sky Electric Guitar',
    price: 2399,
    guitURL:
      'https://www.guitarcenter.com/PRS/John-Mayer-Silver-Sky-Electric-Guitar-Roxy-Pink-1500000357868.gc',
    rating: 1.3,
    description:
      'The PRS Silver Sky is the result of a close collaboration between Grammy Award-winning musician John Mayer and Paul Reed Smith. More than two and half years in the making, the Silver Sky is a vintage-inspired instrument that is at once familiar, but also newly PRS through and through. This model was based off of Mayer and Smith’s favorite elements from 1963 and 1964 vintage instruments, resulting in an idealized version of a vintage single-coil guitar. The attention that was paid to every detail sets this guitar apart.',
    brand: 'PRS',
    countInStock: 6,
    numReviews: 9,
    category: 'Electric',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/American-Professional-Stratocaster-Rosewood-Fingerboard-Electric-Guitar-3-Color-Sunburst/J46191000001000-00-220x220.jpg',
    name: 'Fender American Professional Stratocaster Rosewood Fingerboard Electric Guitar',
    price: 1449.99,
    guitURL:
      'https://www.guitarcenter.com/Fender/American-Professional-Stratocaster-Rosewood-Fingerboard-Electric-Guitar-3-Color-Sunburst-1500000030239.gc',
    rating: 3.46,
    description:
      'Often copied, but never surpassed, the Stratocaster is arguably the world’s most-loved electric guitar. Electrifying the music world since its debut in 1954, its natural, versatile sound made the Stratocaster the benchmark for exceptional guitar tones. The American Professional Stratocaster isn’t a re-imagining of the classic design; it’s the authentic original model, evolved.\n\nThe choice of musical legends since its release, the Stratocaster feel and sound set the world on fire, powering music movements from electric blues to EDM, and everything in-between. In your hands this Strat is ready to navigate the creative twists and turns of your music, inspiring you to express yourself in new ways through your playing.\n\nDeveloped by pickup master Tim Shaw, the brand-new V-Mod single-coil pickups are voiced specifically for each position, mixing alnico magnet types to produce powerful, nuanced tones with original Fender sonic DNA. Retain high end clarity when adjusting the volume controls, thanks to the new treble-bleed tone circuit that lets your tone shine through in all its glory. The new modern “Deep C”-shaped neck profile feels just right in your hand while the narrow-tall frets make it easy to bend strings accurately and play perfectly intonated chords.\n\nThe best of yesterday and today, the American Professional Stratocaster is the latest form of electric inspiration from Fender. Step up and stake your claim to a legend.',
    brand: 'Fender',
    countInStock: 9,
    numReviews: 4,
    category: 'Electric',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/Les-Paul-Classic-Electric-Guitar-Transparent-Cherry/L54489000001000-00-220x220.jpg',
    name: 'Gibson Les Paul Classic Electric Guitar',
    price: 1999,
    guitURL:
      'https://www.guitarcenter.com/Gibson/Les-Paul-Classic-Electric-Guitar-Transparent-Cherry-1500000273977.gc',
    rating: 2.86,
    description:
      "The Gibson Les Paul Classic combines the early 60's style Les Paul model with some functional and time-tested modifcations. As expected, The LP Classic is crafted with a mahogany back and maple top coupled with a slim taper mahogany neck and bound, rosewood fingerboard. Burstbucker 61R & 61T zebra, open-coil pickups provide classic Gibson tones from the era with a bit of extra punch thanks to the open coils. The control assembly features four push-pull pots which provide choices of coil tapping, phase switching and pure bypassing for functional and versatile sonic variety.",
    brand: 'Gibson',
    countInStock: 11,
    numReviews: 10,
    category: 'Electric',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/GD-30CE-12-String-Acoustic-Electric-Guitar-Deep-Blue/L18559000002000-00-220x220.jpg',
    name: 'Takamine GD-30CE 12-String Acoustic-Electric Guitar',
    price: 549.99,
    guitURL:
      'https://www.guitarcenter.com/Takamine/GD-30CE-12-String-Acoustic-Electric-Guitar-Deep-Blue-1500000298943.gc',
    rating: 2.74,
    description:
      'This special edition GD30CE-12 dreadnought is a stage-worthy 12-string acoustic-electric guitar with a solid-top construction, soft Venetian-style cutaway, superior-sounding Takamine electronics system and an exclusive Wine Red finish. This gorgeous performance-ready model is crafted with a solid spruce top paired with a mahogany body that combine for a rich, resonant sound.\n\nThe GD30CE-12 also features a mahogany neck with a 12"-radius ovangkol fingerboard for great feel and playability. The onboard Takamine TP-4TD preamp system makes it easy to find and keep your tone with a built-in tuner and 3-band EQ with gain controls for excellent amplified performance and versatility.\n\nRounding out the GD30CE-12 are a rosewood bridge, synthetic bone nut and split bridge saddle, rosewood headcap, pearloid rosette and dot inlays, and chrome die-cast tuners.\n\nCase sold separately.',
    brand: 'Takamine',
    countInStock: 8,
    numReviews: 2,
    category: 'Acoustic',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/P1DC-12-SM-12-String-Dreadnought-Acoustic-Electric-Guitar-Medium-Brown-Stain/L40708000001000-00-220x220.jpg',
    name: 'Takamine P1DC-12 SM 12-String Dreadnought Acoustic-Electric Guitar',
    price: 1299,
    guitURL:
      'https://www.guitarcenter.com/Takamine/P1DC-12-SM-12-String-Dreadnought-Acoustic-Electric-Guitar-Medium-Brown-Stain-1500000244944.gc',
    rating: 3.25,
    description:
      'Sweet tone, optimum playability and state-of-the-art onboard electronics make playing Takamine\'s Pro Series P1DC-12 SM 12-string cutaway dreadnought a thoroughly rewarding acoustic experience. Great warmth, balance and harmonic richness resound from its "X"-braced solid cedar top and sapele back and sides. An elegant Venetian cutaway offers optimum access to the upper registers. Other premium features include a mahogany neck and rosewood fingerboard with pearl dot inlays. The unique Takamine split bone saddle bridge provides faultless intonation and excellent acoustic coupling to the top. The P1DC-12 also features chrome die-cast machine heads for superb tuning stability, a satin finished top on satin back and sides and the highly acclaimed CT4B II preamp system with three-band EQ, volume control and built-in tuner.\n\nComes in a Satin Molasses finish.',
    brand: 'Takamine',
    countInStock: 3,
    numReviews: 4,
    category: 'Acoustic',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/American-Ultra-Stratocaster-Maple-Fingerboard-Electric-Guitar-Texas-Tea/L69991000006000-00-220x220.jpg',
    name: 'Fender American Ultra Stratocaster Maple Fingerboard Electric Guitar',
    price: 1899.99,
    guitURL:
      'https://www.guitarcenter.com/Fender/American-Ultra-Stratocaster-Maple-Fingerboard-Electric-Guitar-Texas-Tea-1500000302795.gc',
    rating: 3.85,
    description:
      'The Fender American Ultra Series Stratocaster is designed for players who want the most advanced, highest performance Strat ever made. The team spent over two years on intense R&D, analyzing and improving everything for this new flagship line. Made in America in Corona, California, the American Ultra Strat features new noiseless pickups, advanced electronics, tapered heel and body contours, an upgraded neck shape in maple with rolled edges and new stage-ready finishes. It all adds up to a Stratocaster you’ll never part with. But don’t let these modern updates fool you. The vibe of the American Ultra series is still classic Fender.',
    brand: 'Fender',
    countInStock: 9,
    numReviews: 10,
    category: 'Electric',
  },
  {
    image:
      'https://media.guitarcenter.com/is/image/MMGS7/American-Ultra-Telecaster-Maple-Fingerboard-Electric-Guitar-Cobra-Blue/L69941000005000-00-220x220.jpg',
    name: 'Fender American Ultra Telecaster Maple Fingerboard Electric Guitar',
    price: 1899.99,
    guitURL:
      'https://www.guitarcenter.com/Fender/American-Ultra-Telecaster-Maple-Fingerboard-Electric-Guitar-Cobra-Blue-1500000278399.gc',
    rating: 3.62,
    description:
      'The Fender American Ultra Telecaster Maple Fingerboard Electric Guitar is part of the new flagship line from Fender and is designed for players who want the most advanced, highest performance Telecaster ever made. The team spent over two years on intense R&D, analyzing and improving everything. Built in Corona, California, the American Ultra Tele features new noiseless pickups, advanced electronics, tapered heel and body contours, a redesigned neck shape with rolled edges and new stage-ready finishes. It all adds up to a Telecaster you’ll treasure for decades. But don’t let these modern updates fool you. The vibe of the American Ultra series is still classic Fender.',
    brand: 'Fender',
    countInStock: 9,
    numReviews: 10,
    category: 'Electric',
  },
]

export default guitars
