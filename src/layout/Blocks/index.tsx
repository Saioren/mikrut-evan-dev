import React from 'react'
import { blocks as allBlocks } from '../../blocks'
import kebabCase from 'lodash/kebabCase'
import { Blocks as BlocksType } from '@/types/Blocks/types'
import Padding from '../Padding'

const Blocks: React.FC<{
  blocks: BlocksType
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block

          if (blockType && blockType in allBlocks) {
            const Block = allBlocks[blockType]

            if (Block) {
              return (
                <React.Fragment key={blockName}>
                  {/* @ts-ignore */}
                  <Block id={kebabCase(blockName)} {...block} />
                </React.Fragment>
              )
            }
          }
          return null
        })}
      </>
    )
  }

  return null
}

export default Blocks
