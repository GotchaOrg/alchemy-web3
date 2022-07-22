import { FullConfig } from "../types";
export interface RestPayloadSender {
  sendRestPayload: SendRestPayloadFunction;
}
export declare type SendRestPayloadFunction = (
  path: string,
  payload: Record<string, any>,
) => Promise<any>;
export interface RestPayloadConfig {
  url: string;
  config: FullConfig;
  entity?: string;
  version?: string;
}
export declare function makeRestPayloadSender({
  url,
  config,
  entity,
  version,
}: RestPayloadConfig): RestPayloadSender;
