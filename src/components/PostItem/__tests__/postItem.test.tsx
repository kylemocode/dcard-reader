import '@testing-library/jest-dom';

import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import PostItem from '..';
import PostModal from '../../PostModal';

describe('PostItem', () => {
    
    beforeEach(() => {
        jest.resetModules();
    });

    it('click PostItem', () => {
        const defaultProps = {
            postTitle: '',
            postExcerpt: '',
            likeCount: 0,
            commentCount: 0,
            topics: [],
            onClick: () => {}
          };
        
          const createWrapperRenderer = (testProps = {}) => {
            const props = {
              ...defaultProps,
              ...testProps,
            };
        
            return render(<PostItem {...props} />);
          };

        const { getByTestId } = createWrapperRenderer();

        fireEvent.click(getByTestId('postItem'))
    })
})