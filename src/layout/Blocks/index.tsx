import React, { Fragment } from 'react'
import { blocks as allBlocks } from '../../blocks'
import kebabCase from 'lodash/kebabCase'
import Margin from '../../components/Margin'
import { BlocksType } from '@/types/Blocks'

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
                <Margin top={index > 0 ? 'large' : undefined} bottom="large" key={index}>
                  {/* @ts-ignore */}
                  <Block id={kebabCase(blockName)} {...block} />
                </Margin>
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
