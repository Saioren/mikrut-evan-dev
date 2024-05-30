import React, { Fragment } from 'react'
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
      <Fragment>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block

          if (blockType && blockType in allBlocks) {
            const Block = allBlocks[blockType]

            if (Block) {
              return (
                <Padding
                  paddingBottom={index === blocks.length - 1 ? 'large' : undefined}
                  key={index}
                >
                  {/* @ts-ignore */}
                  <Block id={kebabCase(blockName)} {...block} />
                </Padding>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}

export default Blocks
