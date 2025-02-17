# St Lotus

A static site to provide links to the St Lotus history and content

## Requirements
You will need `npm` installed.

## Starting

Run the following to build the files in `./src`. This will watch the development files and automatically rebuild when needed.
```
npm start
```

To actually build the deployment package:

```
npm run build
```


## Developing

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Adding a decklist

Add new entries to `src/decklists.json` for the latest deck (the following regex will be helpful here).

- `s/(\d+)\t/[\1, "/`
- `s/$/"],/`

The format for each deck is:

```json
{
    "date": "2024-02-03",
    "player": "Player Name",
    "genre": "Ramp",
    "seat": 1,
    "wins": 3,
    "losses": 4,
    "stLotus": 1,
    "decklist": [
      [
        1,
        "Black Lotus"
      ],
      [
        2,
        "Thoughtseize"
      ],
      ...
    ]
}

```

Once you have that populated, you can run the following to generate the decklists:

```bash
npm run build:decklists
```



## Releasing

The application is hosted on [github](http://github.com) so pushing to the `gh-pages` branch deploys whatever has been built.
