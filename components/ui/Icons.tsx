import type { ColorValue } from "react-native";
import Svg, { Circle, Path, Polygon } from "react-native-svg";

type IconProps = { size?: number; color: ColorValue };
/** `outline`: körvonalas, halvány kitöltéssel (statisztika-pirulákhoz). */
type OutlinableIconProps = IconProps & { outline?: boolean };

const outlineProps = (color: ColorValue) => ({
  fill: color,
  fillOpacity: 0.2,
  stroke: color,
  strokeWidth: 1.8,
  strokeLinejoin: "round" as const,
});

export function StarIcon({ size = 24, color, outline = false }: OutlinableIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Polygon {...(outline ? outlineProps(color) : { fill: color })} points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </Svg>
  );
}

export function FlameIcon({ size = 24, color, outline = false }: OutlinableIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path {...(outline ? outlineProps(color) : { fill: color })} d="M12 2C12 2 6 8 6 14a6 6 0 0 0 12 0c0-3-2-5-3-7-1 2-2 3-3 3 1-3 0-6 0-8z" />
    </Svg>
  );
}

export function HomeIcon({ size = 24, color }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path fill={color} d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
    </Svg>
  );
}

export function BackIcon({ size = 24, color }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M15 5l-7 7 7 7" fill="none" stroke={color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function LeafIcon({ size = 24, color }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path fill={color} d="M5 19C5 10 10 4 20 4c0 10-6 15-15 15z" />
    </Svg>
  );
}

export function CheckIcon({ size = 24, color }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke={color} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function ArrowRightIcon({ size = 24, color }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke={color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function CloseIcon({ size = 24, color }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M6 6l12 12M18 6L6 18" fill="none" stroke={color} strokeWidth={2.5} strokeLinecap="round" />
    </Svg>
  );
}

export function BulbIcon({ size = 24, color }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ClockIcon({ size = 24, color }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle cx={12} cy={12} r={9} fill="none" stroke={color} strokeWidth={2} />
      <Path d="M12 7v5l3 2" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function LockIcon({ size = 24, color }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}
