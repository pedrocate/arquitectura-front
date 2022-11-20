import ILogger from "@/Logger/domain/ILogger";
import { injectable } from "inversify";

@injectable()
export default class SentryLogger implements ILogger {
  info(message: string): void {
    console.log("Sentry", message);
  }

  warning(message: string): void {
    console.warn("Sentry", message);
  }

  error(message: string): void {
    console.error("Sentry", message);
  }
}
