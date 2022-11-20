import ILogger from "@/Logger/domain/ILogger";
import { injectable } from "inversify";

@injectable()
export default class ConsoleLogger implements ILogger {
  info(message: string): void {
    console.log(message);
  }

  warning(message: string): void {
    console.warn(message);
  }

  error(message: string): void {
    console.error(message);
  }
}
