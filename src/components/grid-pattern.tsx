'use client'

import {
  useCallback,
  useEffect,
  useEffectEvent,
  useId,
  useRef,
  useState,
} from 'react'
import { motion } from 'framer-motion'
import mergeClass from '@/functions/merge-class'

interface GridPatternProps {
  width?: number
  height?: number
  x?: number
  y?: number
  strokeDasharray?: number
  numSquares?: number
  className?: string
  maxOpacity?: number
  duration?: number
}

export default function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  maxOpacity = 0.5,
  duration = 4,
  ...props
}: GridPatternProps) {
  const id = useId()
  const containerRef = useRef<SVGSVGElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const getPos = useCallback(() => {
    return [
      Math.floor((Math.random() * dimensions.width) / width),
      Math.floor((Math.random() * dimensions.height) / height),
    ]
  }, [dimensions.width, dimensions.height, width, height])

  // Adjust the generateSquares function to return objects with an id, x, and y
  const generateSquares = useCallback(
    (count: number) => {
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        pos: getPos(),
      }))
    },
    [getPos],
  )

  const [squares, setSquares] = useState(() => generateSquares(numSquares))

  // Function to update a single square's position
  const updateSquarePosition = (id: number) => {
    setSquares(currentSquares =>
      currentSquares.map(sq =>
        sq.id === id
          ? {
              ...sq,
              pos: getPos(),
            }
          : sq,
      ),
    )
  }

  // Update squares to animate in
  useEffectEvent(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares))
    }
  })

  // Resize observer to update container dimensions
  useEffect(() => {
    const current = containerRef.current
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        })
      }
    })

    if (current) {
      resizeObserver.observe(current)
    }

    return () => {
      if (current) {
        resizeObserver.unobserve(current)
      }
    }
  }, [containerRef])

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={mergeClass(
        'pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30',
        className,
      )}
      {...props}>
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}>
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos: [x, y], id }, index) => (
          <motion.rect
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              repeat: 1,
              delay: index * 0.1,
              repeatType: 'reverse',
            }}
            onAnimationComplete={() => {
              updateSquarePosition(id)
            }}
            key={`${x}-${y}-${index}`}
            width={width - 1}
            height={height - 1}
            x={x * width + 1}
            y={y * height + 1}
            fill="currentColor"
            strokeWidth="0"
          />
        ))}
      </svg>
    </svg>
  )
}
