# Marketing Site — Image Placements

Tracks where photos from `Resources/RescueNet Files` were placed across the
public marketing site (`frontend/src/site/pages`), and the remaining slots
that could **not** be filled from that folder — with size/ratio guidance so
replacements are easy to source.

All placed images live in `frontend/public/images/marketing/` (copied and
re-encoded from `Resources/RescueNet Files`; the two originals over 10MB were
downscaled to 1920px wide / ~80% JPEG quality for web performance). Each
source photo was used exactly once — no repeats.

## Filled placements

| Page | Location | File | Source |
| --- | --- | --- | --- |
| Home | "Who Are You Here For" — Shelters & Rescues card | `home-card-shelters.jpg` | `woman-caring-for-shelter-pup-2.jpg` |
| Home | "Who Are You Here For" — Pet Owners card | `home-card-pet-owners.jpeg` | `boy-and-cat-kneeling-in-grass.jpeg` |
| Home | "Who Are You Here For" — Sponsors & Partners card | `home-card-sponsors.jpg` | `KH_dog_looking_at_blowing_petals_from_tree.jpg` |
| Home | Closing band above footer | `home-banner-peeking-pets.jpg` | `Dogs_and_Cats_Peeking_Over_Web_Banner.jpg` |
| About | Hero (was a heart-icon box) | `about-hero-adoption-success.jpg` | `AlfieAdoptionNKUTSuper3029sak.jpg` (downscaled) |
| About | Founder Story portrait | `/images/team/misty-harrison.jpg` | *existing local asset, not from Resources folder* |
| Shelters & Rescues | Hero photo band | `shelters-hero-adoption-day.jpg` | `ArielMeetingTimSubletteNKUTSuper5226sak.jpg` (downscaled) |
| Shelters & Rescues | Pilot Program section, side image | `shelters-secondary-outreach.jpeg` | `street-veterinarian-07.jpeg` |
| Pet Owners | "Owner Trust" section (was a heart-icon box) | `pet-owners-hero-family.jpeg` | `family-sitting-w-dog-outside-02.jpeg` |
| Pet Owners | "Privacy" section (was a lock-icon box) | `pet-owners-secondary-bond.jpeg` | `bottle-baby-kitten-with-young-girl-03.jpeg` |
| Sponsors | "Why Sponsorship Matters" (was a people-icon box) | `sponsors-hero-care.jpg` | `Dog_being_dried_after_a_wash.jpg` |
| Sponsors | "Regional Model" (was a map-pin-icon box) | `sponsors-secondary-kittens.jpeg` | `bottle-baby-kittens-19.jpeg` |
| Contact | Hero, next to intro copy | `contact-hero-front-desk.jpeg` | `man-with-dog-talking-to-shelter-employee-3.jpeg` |
| Contact | Small accent above "Send Us a Message" | `contact-accent-mascot.jpg` | `Excited_Dog_and_Cat_Looking_Up.jpg` |
| How It Works | Duo band under hero | `how-it-works-medical.jpg`, `how-it-works-transport.jpeg` | `veterinarian-examining-small-dog-7.jpg`, `Cat-in-soft-grey-carrier-00.jpeg` |
| Pilot Program | Hero photo band | `pilot-hero-foster-team.jpeg` | `women-holding-pit-bull-puppies-00.jpeg` |
| Pilot Program | CTA banner (text overlaid on the blank sign) | `pilot-cta-sign.jpg` | `Puppy_and_Kitten_Holding_Up_Blank_Sign.jpg` |
| 404 Not Found | Mascot above the error message | `404-mascot.jpg` | `Curious_Puppy_and_Kitten_Together_Looking_Up.jpg` |

That's all 18 photos in `Resources/RescueNet Files`, each placed once.

## Slots that could not be filled from the photo library

### 1. Home page — "Platform Overview" network diagram

**Location:** `HomePage.jsx`, Section 3, the striped placeholder box labeled
`[ network diagram ]` next to "One Network. Every Animal. Every Organization."

**Why nothing in the folder fits:** every asset in `Resources/RescueNet Files`
is a real photograph of people and animals. This slot calls for an abstract
**diagram or illustration** — something showing shelters/rescues/owners/pets
connected as nodes on a network, not a photo. No diagram or illustration
asset exists in the provided folder.

**What to source:**
- A simple network/node diagram (e.g., a central "pet identity" icon with
  lines connecting to shelter, rescue, foster, and owner icons), OR an
  abstract line-art graphic in the brand's teal/green palette (`#D3EDEA` /
  `#C3E4E0` family already used in the placeholder background).
- Could be commissioned as a vector illustration (SVG preferred for crisp
  scaling) or a static screenshot of an actual in-app diagram if one exists
  in the product.
- **Size/ratio:** the box renders at a fixed height (`h-60`, 240px) at
  roughly 1.7:1–1.9:1 width:height on desktop (it sits in the right column of
  a 2-column grid, so actual width varies ~450–600px). Supply at **1200×630px
  (≈1.9:1)** minimum, transparent or brand-background PNG/SVG so it can be
  object-fit: contain without letterboxing.

### 2. About page — "Meet the Team" headshots

**Location:** `AboutPage.jsx`, Team section — currently three cards for
Misty Harrison (Founder/CEO), Ed Lent (Co-Founder/CTO), and Melanie Lent
(Head of Marketing and Growth), each showing initials in a circle (MH / EL /
ML) instead of a photo.

**Why nothing in the folder fits:** these need to be **actual photos of these
three named people**. `Resources/RescueNet Files` contains stock/candid
photos of unrelated people and animals — using any of them as a stand-in for
a specific named team member's headshot would misrepresent who they are.
This isn't a cropping/ratio problem, it's an accuracy one, so it's flagged as
a gap rather than filled with a "close enough" photo.

**What to source:** a real headshot of each of the three team members.
- **Size/ratio:** the avatar circle is 52×52px on the card, so a photo would
  need a much larger source to look sharp — supply at minimum **400×400px
  (1:1 square)**, well-lit, shoulders-up crop, consistent style across all
  three so the row reads as a matched set.
- Note: `/images/team/misty-harrison.jpg` (572×771) and `/images/team/misty.png`
  (1024×1536) already exist as real photos of Misty and were used for the
  Founder Story portrait elsewhere on this page — the same or a similar photo
  could be reused here for her card once Ed's and Melanie's photos are ready,
  so all three update together rather than looking inconsistent in the
  interim.