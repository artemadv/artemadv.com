# [WIP] artemadv.com

1. Copy the `src/shared/config/example.site.config.js` file and rename `src/shared/config/site.config.js`
2. Add the required values:
	- **API_URL** - server API address. For example `https://api.your-website.com`
	- **LOCALES** - languages for `next-international`. For example `['en', 'ru']`
3. Generate Schema `npm run graphql`

## FSD
FSD assumes all exports from the `index.ts (public api)`, but I use 3 export options on the project:

1. `client/index.ts` - can only be used in client components
2. `server/index.ts` - can only be used in server components
3. `index.ts` - can be used in any components