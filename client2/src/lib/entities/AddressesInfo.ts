import NetInterfaces, { INetInterfaces } from './NetInterfaces';

// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IAddressesInfo {
    dns_port: number;
    interfaces: INetInterfaces;
    web_port: number;
}

export default class AddressesInfo {
    readonly _dns_port: number;

    /**
     * Description: undefined
     * Example: 53
     */
    get dnsPort(): number {
        return this._dns_port;
    }

    static dnsPortValidate(dnsPort: number): boolean {
        return typeof dnsPort === 'number';
    }

    readonly _interfaces: NetInterfaces;

    get interfaces(): NetInterfaces {
        return this._interfaces;
    }

    readonly _web_port: number;

    /**
     * Description: undefined
     * Example: 80
     */
    get webPort(): number {
        return this._web_port;
    }

    static webPortValidate(webPort: number): boolean {
        return typeof webPort === 'number';
    }

    constructor(props: IAddressesInfo) {
        this._dns_port = props.dns_port;
        this._interfaces = new NetInterfaces(props.interfaces);
        this._web_port = props.web_port;
    }

    serialize(): IAddressesInfo {
        const data: IAddressesInfo = {
            dns_port: this._dns_port,
            interfaces: this._interfaces.serialize(),
            web_port: this._web_port,
        };
        return data;
    }

    validate(): string[] {
        const validate = {
            dns_port: typeof this._dns_port === 'number',
            web_port: typeof this._web_port === 'number',
            interfaces: this._interfaces.validate().length === 0,
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: Partial<IAddressesInfo>): AddressesInfo {
        return new AddressesInfo({ ...this.serialize(), ...props });
    }
}
