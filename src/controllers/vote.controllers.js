import { productModel } from "../models/prodcuts.models.js";
import { voteModel } from "../models/votes.models.js";

export const voteProduct = async (req, res) => {
  const userId = req.user.userFound._id;
  const  productId  = req.params.id;

  if (!productId) {
    return res.status(400).json({ error: "Debe especificar un producto." });
  }

  // Validar 
  const product = await productModel.findById(productId);
  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  try {
    // crear voto
    const vote = new voteModel({
      usuario: userId,
      producto: productId,
    });

    await vote.save();

    // Incrementar los votos del producto
    await productModel.findByIdAndUpdate(productId, {
      $inc: { votos: 1 }
    });

    return res.status(201).json({ message: "Voto registrado correctamente" });

  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ error: "Ya has votado en el concurso." });
    }

    console.error("Error al votar:", err);
    return res.status(500).json({ error: "Error al registrar el voto" });
  }
};

export const getVotersByProduct = async (req, res) => {
  const  productId  = req.params.id;

  try {
    // verificar P
    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado." });
    }

    // buscar votos
    const votos = await voteModel
      .find({ producto: productId })
      .populate("usuario", "name email")   // datos user
      // .populate("producto", "name nameRestaurant"); 

    return res.json({
      producto: product.name,
      totalVotos: votos.length,
      votantes: votos,
    });
  } catch (err) {
    console.error("Error al obtener votantes:", err);
    res.status(500).json({ error: "Error al obtener votantes." });
  }
};

export const getVotingResults = async (req, res) => {
  try {
    const productos = await productModel
      .find()
      .sort({ votos: -1 }); // mayor → menor

    return res.json(productos);
  } catch (err) {
    console.error("Error al obtener resultados:", err);
    res.status(500).json({ error: "Error al obtener resultados." });
  }
};