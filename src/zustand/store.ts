import { create } from 'zustand';

interface StoreType {
    texts: string[]
    addText: (text: string) => void
}

const store =  create<StoreType>()((set) => ({
    texts: [],
    addText: (text) => {
        set((state) => ({
            ...state,
            texts: [...state.texts, text]
        }))
    }
}));

const useStore = () => {
    const { texts, addText } = store();

    return {
        texts,
        addText
    }
}

export default useStore;
