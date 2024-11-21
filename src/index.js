/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import {Openai} from 'openai';


export default {
	async fetch(request, env, ctx) {
		apiKey: env.OPENAI_API_KEY
		return new Response('Hello World!');
	},
};
