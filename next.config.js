/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
	dest: "public",
	disable: false,
	cacheOnFrontEndNav: true,
	aggressiveFrontEndNavCaching: true,
	workboxOptions: {
		disableDevLogs: true,
	},
})

module.exports = withPWA({})
