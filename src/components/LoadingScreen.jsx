import { motion, AnimatePresence } from 'framer-motion'
import { BrandLogo } from './BrandLogo'

export function LoadingScreen({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#08090c]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,83,0.06),transparent_60%)]" />
          <div className="relative flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <BrandLogo
                variant="onDark"
                className="h-11 w-auto max-w-[min(80vw,200px)] object-contain sm:h-12 sm:max-w-[220px]"
                width={220}
                height={84}
                loading="eager"
              />
            </motion.div>
            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-amber-500"
                  animate={{ opacity: [0.25, 1, 0.25], scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
