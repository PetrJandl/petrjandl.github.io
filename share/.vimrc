"zobrazit linku pod aktivnim radkem
if version >= 700
       set cursorline
        hi CursorLine   guibg=#2d2d2d
endif

"zobrazit barevnou syntaxi
:syntax on

"F2 - ulozit
map <F2> :wq<cr>

"F9 prepnouz zobrazeni sloupce s cisly radku
map <F9> :set number!<cr>:set relativenumber!<cr>

"F10 zavrit bez uložení
map <F10> :qa!<cr>

"zvyraznit TODO v textu
highlight Todo ctermfg=red guifg=#ffaaaa

"zobrazit cisla radku
set number

"zobrazit relativni cisla radku
set relativenumber

set scrolloff=12
set showcmd
set showmode
set sidescrolloff=48

"set foldmethod=manual
"set foldmethod=indent

set nofoldenable