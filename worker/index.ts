import { createEventHandler } from "@remix-run/cloudflare-workers";

// @ts-ignore
import * as build from "../build";

let eventHandler = createEventHandler({ build });

addEventListener("fetch", eventHandler);
