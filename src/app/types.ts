export interface Address {
  city: string;
  neighborhood: string;
  street: string;
}

export interface CountryInfo {
  flag: string;
  name: string;
  keyCode: number;
  countryFormat: string;
}

export interface Theme {
  primary: string;
  secondary: string;
  tertiary: string;
  error: string;
  neutral: string;
  darkTertiary: string;
  darkNeutral: string;
  lightBodyFontColor: string;
  darkBodyFontColor: string;
  lightToolbarFontColor: string;
  darkToolbarFontColor: string;
}

export interface Themes {
  themes: Theme[];
}

export type ThemeColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'error'
  | 'neutral'
  | 'lightTertiary'
  | 'darkTertiary'
  | 'lightNeutral'
  | 'darkNeutral';

export type Mode = 'light' | 'dark';
