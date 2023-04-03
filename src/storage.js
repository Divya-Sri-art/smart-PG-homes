import { create } from 'zustand'

const initialState={
    isOpen:false
}


const useStore=create((set)=>({
    ...initialState,
    setIsOpen:()=>set((state) => ({ ...state,isOpen:!state.isOpen }))

}))

export default useStore