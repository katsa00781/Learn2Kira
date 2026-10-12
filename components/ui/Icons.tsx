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

const stroke = (color: ColorValue, width = 2) => ({
  fill: "none" as const,
  stroke: color,
  strokeWidth: width,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function FlagIcon({ size = 24, color }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M6 21V4M6 4h11l-2.5 4L17 12H6" {...stroke(color)} />
    </Svg>
  );
}

export function BoltIcon({ size = 24, color }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M13 3L5 13.5h6L10 21l9-11h-6z" {...stroke(color)} />
    </Svg>
  );
}

export function CrownIcon({ size = 24, color }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M4 18L3 7l5 4 4-6 4 6 5-4-1 11zM4 21h16" {...stroke(color)} />
    </Svg>
  );
}

export function BookIcon({ size = 24, color }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M12 6c-2-1.5-5-2-8-2v14c3 0 6 .5 8 2 2-1.5 5-2 8-2V4c-3 0-6 .5-8 2zM12 6v14" {...stroke(color)} />
    </Svg>
  );
}

export function PencilIcon({ size = 24, color }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M4 20l1-5L16 4l4 4L9 19zM14 6l4 4" {...stroke(color)} />
    </Svg>
  );
}

export function TargetIcon({ size = 24, color }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle cx={12} cy={12} r={9} {...stroke(color)} />
      <Circle cx={12} cy={12} r={4.5} {...stroke(color)} />
    </Svg>
  );
}

export function LockIcon({ size = 24, color }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3" {...stroke(color)} />
    </Svg>
  );
}
