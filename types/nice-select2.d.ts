declare module "nice-select2" {
  export interface NiceSelectOptions {
    data?: unknown;
    searchable?: boolean;
    showSelectedItems?: boolean;
    placeholder?: string;
    searchtext?: string;
    selectedtext?: string;
    hideSelect?: boolean;
  }

  export class NiceSelect {
    constructor(element: Element, options?: NiceSelectOptions);
    update(e?: unknown): void;
    disable(): void;
    enable(): void;
    clear(): void;
    destroy(): void;
    focus(target?: string): void;
  }

  export function bind(
    element: Element,
    options?: NiceSelectOptions
  ): NiceSelect;

  const _default: typeof NiceSelect;
  export default _default;
}
