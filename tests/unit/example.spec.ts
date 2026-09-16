import { describe, expect, test } from 'vitest'
import { categoriasEnciclopedia, temasEnciclopedia } from '@/data/enciclopedia'

describe('enciclopedia data', () => {
  test('exposes programming categories and no preset topics', () => {
    expect(categoriasEnciclopedia).toHaveLength(8)
    expect(temasEnciclopedia).toHaveLength(0)

    for (const categoria of categoriasEnciclopedia) {
      expect(categoria.id).toBeTruthy()
      expect(categoria.nombre).toBeTruthy()
      expect(categoria.descripcion).toBeTruthy()
      expect(categoria.icon).toBeTruthy()
      expect(categoria.color).toMatch(/^#/)
    }
  })
})
