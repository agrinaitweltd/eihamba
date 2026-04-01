import useCountUp from '@/hooks/useCountUp';

export default function CountText({ as: Tag = 'span', value, duration = 2000, className }) {
  const { ref, display } = useCountUp(value, duration);

  return (
    <Tag ref={ref} className={className}>
      {display}
    </Tag>
  );
}