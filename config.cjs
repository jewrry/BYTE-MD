const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA61Va4+iSBT9L/VVM1K8MelkUB5iq6A22LrZDwUUD+U1RWELE//7Bu2e6WRme3qT5VNRj3vPuXXPqe+gKNMaP+IWjL+DiqRnRHE/pG2FwRhMmijCBAxBiCgCYzAwbJvbBfIRnbmB/7gLwt2Blea6bxauvVDSpFnISz7dcJB/ANchqBo/S4MPAj7NRTcbbHWnceCB4R4vTDaahELprjzGKrtAmYudARVTuAXsI6KUpEWsVwnOMUHZI24dlJLPwdfNQaw8QjQaGaKnbxVW72Ydv1pyZ5KampFJz1rnlcs2YJnPwZcWlpXlGbd4rDCDjisvZEeytl+pz2tWjwWm2JW5yMhsewnu8Os0LnBohbigKW0/XffUqhX7m7Sba0+SxsZ727RcX96MGDZEMuqai9rYCTkfQtf9HPB6JkO8j+Nv9bcoijzZadkFlWdrJ+AJWvtWrMw9faHH3vb0HrhD3nrl9F/qblv51JZkmMvPUzU6hRFP0UvlMnU7s8yFYNquLT8LqVWePln3FUxHL7qy2rAm727OLo6b+cJf54cmT8x1eQz5yiLPVbfyyp/wEW3IRyj5JzoTYJKoraOfdsnehAVcLQ4XR/cG+W47sepSeskyjYQcLzJdN3PtDicc3F/w3iu4iy4pvrs2/MtuNa/8A40lV03ihxujE26tEIzhdQgIjtOaEkTTsujnJGYIUHje4oBgeqsu2HhLuZRm5Z5trU1WOLV12E7PE23z5AfTbymsvNgcXbJ2tncfwBBUpAxwXeNwlta0JO0S1zWKcQ3Gf90uqudMcF5SPE9DMAaswEOGYwWWYZSv9ZeXBNEaVdWXAlMwBBEp8yUGY0oaPAS3A6KqSLIqC4YqsjKcTqCuM7KqKswEsoIoTnuG+T3pU5rjmqK8AmMo8XK/LInX4f+DY6LJsi5KnCwbPBQnhsCLrD7VREM0DB0q4h9wSP8XDoHlJZ7nJQZChpMmkBE4iYOswU0YiVEF/WMcCnP9ewgKfKF3OfVNwMEhiFJSU7doqqxE4ZvW3hZREJRNQbdtEUz7ASZg/G4aU5oWcd0zawpEgiQ942nPA4wjlNX4R99hgsM3Lq9eOi3DXg7yzPB0W/BAj70P9Ettxtyv1SlQvxkcMSHtEZM0ONUMD4Ygu5/mOYFVOJ7jOFFQ5DH3tZ+//sDdpwkxRWlWgzGYLro5beKJPt85TKCbprqM1Wmsgp8832R81wnzstPKiA1ps19IJ5kNTqOjO1qe+Hplj/iDdhSkTePBWIenh98EAWPgW7ORd54a+aBqRLPaO81y3j059So+BWRvXvZdVwxk+THfco3I7ObtUY5H53IbNcnFzp2uZWtz086INmjDQEs4N/QG6vqhzxbicxrg98lc80jOmM4RETW5GgxY9lk3qvSgLV6MGMIwgC9pZZ26c306l8J+uTyMUA6X+jqvjMnuWUnCo3GRczdrLLirJk2gRk28vhvMzeCy14clfdV+evuNUnzz6der+tON3nH3fcdch+9CvBr/v5jnJFwasThTCt/PpwPBWRVzh4dON7cX2tN5YK75AWb8LNxPVgdw7QVQZYhGJcn71yj3ERgCUjZ9F1tFVH6Qaaq6lv5qqxmqqfpTGb8TPXPf5ZCymqE6AWMAH/lk1vdo3qpVtaWIvgkNqP1ncz64/gMLBkGHGgkAAA==",
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'true',
  "MODE": process.env.MODE || "public",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "923072380380",
  "OWNER_NAME": process.env.OWNER_NAME || "Hamza",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'true',
  "PRESENCE": process.env.PRESENCE || "online",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'true',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'true',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'true',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'true',
  "AUTO_REACT": process.env.AUTO_REACT === 'true',
  "WELCOME": process.env.WELCOME === 'true',
  "ANTI_BAD": process.env.ANTI_BAD === 'true',
  "ANTI_LINK": process.env.ANTI_LINK === 'true',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'true',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'true',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'true',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "972",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'true'
};
