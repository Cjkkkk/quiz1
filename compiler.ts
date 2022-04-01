import wabt from 'wabt';

export async function run(waSource: string): Promise<number> {
    const wabtApi = await wabt();
    const parsed = wabtApi.parseWat("example", waSource);
    const binary = parsed.toBinary({});
    const wasmModule = await WebAssembly.instantiate(binary.buffer, {});
    return (wasmModule.instance.exports as any)._start();
}