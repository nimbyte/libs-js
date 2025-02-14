export class MathWorker<T, U> extends Worker {
  run(params: T): Promise<U> {
    return new Promise((resolve, reject) => {
      this.addEventListener("message", (event: MessageEvent<U>) => {
        resolve(event.data);
      });
      this.addEventListener("error", reject);
      this.postMessage(params);
    });
  }
}
