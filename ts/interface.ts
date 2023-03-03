export interface ILogo {
    //   image: HTMLImageElement;
    src: string;
    className?: string;
    width?: number;
    height?: number;
}

export interface episodesType {
    id: number | string,
    label: string,
    description: string,
    logo: ILogo


}